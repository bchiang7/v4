import React from 'react';
import PropTypes from 'prop-types';
import {
  IconAppStore,
  IconBookmark,
  IconCodepen,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconPlayStore,
  IconStar,
  IconTwitter,
  IconGatsby,
  IconTypeScript,
  IconPython,
  IconHtml,
  IconCss,
  IconR,
  IconGraphQL,
  IconPostgreSQL,
  IconGit,
  IconElasticSearch,
  IconReact,
  IconAngular,
  IconTableau,
  IconOracle,
  IconRedis,
  IconAws,
  IconDocker,
  IconFirebase,
  IconGcp,
  IconKafka,
  IconJenkins,
  IconRestAPI,
  IconTensorflow,
  IconPytorch,
  IconScikitlearn,
  IconJupyter,
  IconEmber,
  IconPhp,
  IconLaravel,
  IconFigma,
  IconLLMAgents,
  IconOpenCV,
  IconFastAPI,
  IconFlask,
  IconNodeJS,
  IconReactNative,
  IconCICD,
  IconCpp,
  IconCUDA,
  IconVerilogFPGA,
  IconEvals,
  IconRealTimeSystems,
  IconSystemDesign,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'Bookmark':
      return <IconBookmark />;
    case 'Codepen':
      return <IconCodepen />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'Star':
      return <IconStar />;
    case 'Twitter':
      return <IconTwitter />;
    case 'Gatsby':
      return <IconGatsby />;
    case 'TypeScript':
      return <IconTypeScript />;
    case 'Python':
      return <IconPython />;
    case 'HTML':
      return <IconHtml />;
    case 'CSS':
      return <IconCss />;
    case 'R':
      return <IconR />;
    case 'GraphQL':
      return <IconGraphQL />;
    case 'PostgreSQL':
      return <IconPostgreSQL />;
    case 'Git':
      return <IconGit />;
    case 'Elasticsearch':
      return <IconElasticSearch />;
    case 'React':
      return <IconReact />;
    case 'Angular':
      return <IconAngular />;
    case 'Tableau':
      return <IconTableau />;
    case 'Oracle DB':
      return <IconOracle />;
    case 'Redis':
      return <IconRedis />;
    case 'AWS':
      return <IconAws />;
    case 'Docker':
      return <IconDocker />;
    case 'Firebase':
      return <IconFirebase />;
    case 'GCP':
      return <IconGcp />;
    case 'Kafka':
      return <IconKafka />;
    case 'REST API':
      return <IconRestAPI />;
    case 'Jenkins':
      return <IconJenkins />;
    case 'TensorFlow':
      return <IconTensorflow />;
    case 'PyTorch':
      return <IconPytorch />;
    case 'scikit-learn':
      return <IconScikitlearn />;
    case 'Jupyter':
      return <IconJupyter />;
    case 'Ember.js':
      return <IconEmber />;
    case 'PHP':
      return <IconPhp />;
    case 'Laravel':
      return <IconLaravel />;
    case 'Figma':
      return <IconFigma />;
    case 'LLM Agents':
      return <IconLLMAgents />;
    case 'OpenCV':
      return <IconOpenCV />;
    case 'FastAPI':
      return <IconFastAPI />;
    case 'Flask':
      return <IconFlask />;
    case 'Node.js':
      return <IconNodeJS />;
    case 'React Native':
      return <IconReactNative />;
    case 'CI/CD':
      return <IconCICD />;
    case 'C++':
      return <IconCpp />;
    case 'CUDA':
      return <IconCUDA />;
    case 'Verilog/FPGA':
      return <IconVerilogFPGA />;
    case 'Evals':
      return <IconEvals />;
    case 'Real-Time Systems':
      return <IconRealTimeSystems />;
    case 'System Design':
      return <IconSystemDesign />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
