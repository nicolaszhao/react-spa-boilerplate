import Mock from 'mockjs';
import { USER } from './urls';

export default function mock() {
  Mock.setup({
    timeout: '400-1000'
  });

  Mock.mock(USER, {
    'data|2': {
      birth: '@date',
      'age|10-60': 20,
      title: '@title',
      name: '@name',
      county: '@county',
      city: '@city',
      email: '@email'
    },
    'status|-1-0': 0,
    message: '@sentence'
  });
}
