// eslint-disable-next-line import/no-anonymous-default-export
export default {
  formId: "checkoutForm",
  formField: {
    tokenAddress: {
      name: "tokenAddress",
      label: "Token address*",
      requiredErrorMsg: "Token address is required",
    },
    sale_type: {
      name: 'sale_type',
      label: 'Sale type*',
      requiredErrorMsg: "Sale type is required",
    },
    description: {
      name: "description",
      label: "Token description",
    },
    useAddressForPaymentDetails: {
      name: "useAddressForPaymentDetails",
      label: "Use this address for payment details",
    },
    rate: {
      name: "rate",
      label: "Rate*",
      requiredErrorMsg: "Rate is required",
    },
    softCap: {
      name: "softCap",
      label: "Softcap (SYS)*",
      requiredErrorMsg: "Softcap is required",
      invalidErrorMsg: "Softcap must be >= 50% of Hardcap!",
    },
    hardCap: {
      name: "hardCap",
      label: "Hardcap (SYS)*",
      requiredErrorMsg: "Hardcap is required",
    },
    minBuy: {
      name: "minBuy",
      label: "Minimum Buy (SYS)*",
      requiredErrorMsg: "Minimum Buy is required",
      invalidErrorMsg: "Minimum Buy must be smaller than Max Buy!",
    },
    maxBuy: {
      name: "maxBuy",
      label: "Maximum Buy (SYS)*",
      requiredErrorMsg: "Maximum Buy is required",
    },
    refund_type: {
      name: 'refund_type',
      label: 'Refund type*',
      requiredErrorMsg: "Refund type is required",
    },
    startDate: {
      name: "startDate",
      label: "Start date*",
      requiredErrorMsg: "Start date is required",
      invalidErrorMsg: "Start date is not valid",
    },
    endDate: {
      name: "endDate",
      label: "End date*",
      requiredErrorMsg: "End date is required",
      invalidErrorMsg: "End date is not valid",
    },
    useVestingRule: {
      name: "useVestingRule",
      label: "Using Vesting Contributor?",
    },
    firstRelease: {
      name: 'firstRelease',
      label: 'First release for private sale (percent)*',
      requiredErrorMsg: "First release for private sale cannot be blank",
    },
    vestingPeriod: {
      name: 'vestingPeriod',
      label: 'Vesting period each cycle (days)*',
      requiredErrorMsg: "Vesting period each cycle cannot be blank",
    },
    eachRelease: {
      name: 'eachRelease',
      label: 'Private sale token release each cycle (percent)*',
      requiredErrorMsg: "Private sale token release each cycle cannot be blank",
    },
    logoUrl: {
      name: 'logoUrl',
      label: 'Logo Url*',
      requiredErrorMsg: "Logo URL is required",
    },
    website: {
      name: 'website',
      label: 'Website'
    },
    facebook: {
      name: 'facebook',
      label: 'Facebook'
    },
    twitter: {
      name: 'twitter',
      label: 'Twitter'
    },
    github: {
      name: 'github',
      label: 'Github'
    },
    telegram: {
      name: 'telegram',
      label: 'Telegram'
    },
    instagram: {
      name: 'instagram',
      label: 'Instagram'
    },
    discord: {
      name: 'discord',
      label: 'Discord'
    },
    reddit: {
      name: 'reddit',
      label: 'Reddit'
    },
    additionalDescription: {
      name: 'additionalDescription',
      label: 'Description'
    },
  },
};
