// react-intl 怎么切换语言

import zhcn from 'antd/lib/locale-provider/zh_TW';
import { DatePicker, LocaleProvider } from 'antd';
import { FormattedMessage, IntlProvider, addLocaleData } from 'react-intl';
import zhData from 'react-intl/locale-data/zh';

const message = {
  'helloworld': '你好啊',
  'name': '姓名'
}

addLocaleData(zhData);

export default () => {
  return (
    <IntlProvider locale="zh" messages={message}>
      <LocaleProvider locale={zhcn}>
        <div>
          <DatePicker />
          <FormattedMessage id="helloworld"/>
          <FormattedMessage id="name"/>
        </div>
      </LocaleProvider>
    </IntlProvider>
  )
}