import { jsdom } from 'jsdom';
import 'urlsearchparams';

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
