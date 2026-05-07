export default async function handler(req, res) {
  const { code } = req.query;
  const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

  if (!code) {
    res.status(400).send('Missing code parameter');
    return;
  }

  if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
    res.status(500).send('GitHub OAuth environment variables are not set');
    return;
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    const data = await tokenRes.json();

    if (data.error) {
      res.status(401).send(`OAuth error: ${data.error_description}`);
      return;
    }

    // Decap CMS expects this postMessage format to complete the auth flow
    const payload = JSON.stringify({ token: data.access_token, provider: 'github' });
    res.setHeader('Content-Type', 'text/html');
    res.send(`<!DOCTYPE html>
<html>
<body>
<script>
(function () {
  function send() {
    window.opener.postMessage(
      'authorization:github:success:${payload.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}',
      '*'
    );
  }
  function receive(e) {
    if (e.data === 'authorizing:github') send();
  }
  window.addEventListener('message', receive, false);
  window.opener.postMessage('authorizing:github', '*');
})();
</script>
</body>
</html>`);
  } catch (err) {
    res.status(500).send('Failed to exchange code for token');
  }
}
