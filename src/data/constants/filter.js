import moment from 'moment';

export const TRAINING_SERIES = [
  'all',
  'rr',
  'we',
  'wms',
  'ccrcsr',
  'iw',
  'bl',
  'her_finance',
];

export const LEVELS = ['all', 'basic', 'advanced'];

export const LANGUAGES = [
  'all',
  'en',
  'cn',
  'bd',
  'th',
  'my',
  'km',
  'hn',
  'cr',
];

export const MARKETS = [
  {
    value: 'all',
    trainingSeries: [
      'all',
      'rr',
      'we',
      'wms',
      'ccrcsr',
      'iw',
      'bl',
      'her_finance',
    ],
    language: ['all', 'en', 'cn', 'bd', 'th', 'my', 'km', 'hn', 'cr'],
  },
  {
    value: 'china',
    trainingSeries: ['all', 'rr', 'we', 'wms', 'ccrcsr', 'iw'],
    language: ['all', 'en', 'cn'],
  },
  {
    value: 'bangladesh',
    trainingSeries: ['all', 'rr', 'we', 'bl', 'her_finance'],
    language: ['all', 'en', 'bd'],
  },
  {
    value: 'thailand',
    trainingSeries: ['rr'],
    language: ['all', 'en', 'th', 'my', 'km'],
  },
  {
    value: 'mauritius',
    trainingSeries: ['rr'],
    language: ['all', 'en', 'bd', 'hn', 'cr'],
  },
];

export const TIME_PERIODS = [
  {
    labelKey: 'year_to_date',
    fromDate: moment()
      .startOf('year')
      .format('YYYY-MM-DD'),
    untilDate: moment().format('YYYY-MM-DD'),
  },
  {
    labelKey: 'previous_year',
    fromDate: moment()
      .subtract(1, 'year')
      .startOf('year')
      .format('YYYY-MM-DD'),
    untilDate: moment()
      .subtract(1, 'year')
      .endOf('year')
      .format('YYYY-MM-DD'),
  },
  {
    labelKey: 'last_12_months',
    fromDate: moment()
      .subtract(1, 'year')
      .format('YYYY-MM-DD'),
    untilDate: moment().format('YYYY-MM-DD'),
  },
  {
    labelKey: 'last_6_months',
    fromDate: moment()
      .subtract(6, 'months')
      .format('YYYY-MM-DD'),
    untilDate: moment().format('YYYY-MM-DD'),
  },
  {
    labelKey: 'last_3_months',
    fromDate: moment()
      .subtract(3, 'months')
      .format('YYYY-MM-DD'),
    untilDate: moment().format('YYYY-MM-DD'),
  },
];
