import checkoutFormModel from "./checkoutFormModel";
const {
  formField: {
    tokenAddress,
    sale_type,
    useAddressForPaymentDetails,
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
  },
} = checkoutFormModel;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  [tokenAddress.name]: "",
  [sale_type.name]: "",
  [useAddressForPaymentDetails.name]: false,
  [rate.name]: "",
  [softCap.name]: "",
  [hardCap.name]: "",
  [minBuy.name]: "",
  [maxBuy.name]: "",
  [refund_type.name]: "",
  [startDate.name]: "",
  [endDate.name]: "",
  [firstRelease.name]: "",
  [vestingPeriod.name]: "",
  [eachRelease.name]: "",
  [logoUrl.name]: "",
};
