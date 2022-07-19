import checkoutFormModel from "./checkoutFormModel";
const {
  formField: {
    tokenAddress,
    network,
    useAddressForPaymentDetails,
    rate,
    hardCap,
    maxBuy,
    startDate,
    endDate,
    firstRelease,
    vestingPeriod,
    eachRelease,
    projectName,
    logoUrl
  },
} = checkoutFormModel;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  [tokenAddress.name]: "",
  [network.name]: "",
  [useAddressForPaymentDetails.name]: false,
  [rate.name]: "",
  [hardCap.name]: "",
  [maxBuy.name]: "",
  [startDate.name]: "",
  [endDate.name]: "",
  // [firstRelease.name]: "",
  // [vestingPeriod.name]: "",
  // [eachRelease.name]: "",
  [projectName.name]: "",
  [logoUrl.name]: "",
};
