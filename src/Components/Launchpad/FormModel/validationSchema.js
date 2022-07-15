import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    tokenAddress,
    sale_type,
    rate,
    softCap,
    hardCap,
    minBuy,
    maxBuy,
    refund_type,
    startDate,
    endDate,
    firstRelease,
    vestingPeriod,
    eachRelease,
    logoUrl
  }
} = checkoutFormModel;

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  Yup.object().shape({
    [tokenAddress.name]: Yup.string().required(`${tokenAddress.requiredErrorMsg}`),
    [sale_type.name]: Yup.string()
      .nullable()
      .required(`${sale_type.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [rate.name]: Yup.string().required(`${rate.requiredErrorMsg}`),
    [softCap.name]: Yup.string()
      .required(`${softCap.requiredErrorMsg}`)
      .test('isHalf', softCap.invalidErrorMsg, (val, context) => {
        if(context.parent.hardCap / 2 < val) return false;
        return true;
      }),
    [hardCap.name]: Yup.string().required(`${hardCap.requiredErrorMsg}`),
    [minBuy.name]: Yup.string()
      .required(`${minBuy.requiredErrorMsg}`)
      .test('isSmaller', minBuy.invalidErrorMsg, (val, context) => {
        if(context.parent.maxBuy*1 < val) return false;
        return true;
      }),
    [maxBuy.name]: Yup.string().required(`${maxBuy.requiredErrorMsg}`),
    [refund_type.name]: Yup.string()
      .nullable()
      .required(`${refund_type.requiredErrorMsg}`),
    [startDate.name]: Yup.string()
      .nullable()
      .required(`${startDate.requiredErrorMsg}`)
      .test('expDate', startDate.invalidErrorMsg, val => {
        if (val) {
          const startDate = new Date();
          const endDate = new Date(2050, 12, 31);
          if (moment(val, moment.ISO_8601).isValid()) {
            return moment(val).isBetween(startDate, endDate);
          }
          return false;
        }
        return false;
      }),
    [endDate.name]: Yup.string()
      .nullable()
      .required(`${endDate.requiredErrorMsg}`)
      .test('expDate', endDate.invalidErrorMsg, val => {
        if (val) {
          const startDate = new Date();
          const endDate = new Date(2050, 12, 31);
          if (moment(val, moment.ISO_8601).isValid()) {
            return moment(val).isBetween(startDate, endDate);
          }
          return false;
        }
        return false;
      }),
      [firstRelease.name]: Yup.string().required(`${firstRelease.requiredErrorMsg}`),
      [vestingPeriod.name]: Yup.string().required(`${vestingPeriod.requiredErrorMsg}`),
      [eachRelease.name]: Yup.string().required(`${eachRelease.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [logoUrl.name]: Yup.string().required(`${logoUrl.requiredErrorMsg}`)
  })
];
