import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'text-encoding';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

Enzyme.configure({ adapter: new Adapter() });