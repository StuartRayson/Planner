import { withTests } from '@storybook/addon-jest';
import jestTestResults from '../jest-test-results.json';

const showTestResults = withTests({ results: jestTestResults, filesExt: '(\\.test.jsx?)' });

export default showTestResults;
