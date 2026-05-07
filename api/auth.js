export default function handler(req, res) {
  const { GITHUB_CLIENT_ID } = process.env;

  if (!GITHUB_CLIENT_ID) {
    res.status(500).send('GITHUB_CLIENT_ID environment variable is not set');
    return;
  }

  const params = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    scope: 'repo,user',
  });

  res.redirect(`https://github.com/login/oauth/authorize?${params}`);
}
