/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export default function usePartner(items: any, currentDialogsId: any, data: any) {
  const currentDialogObj = items.filter((item: any) => item._id === currentDialogsId)[0];

  let partner: any = {};
  if (data) {
    if (currentDialogObj && currentDialogObj.author._id === data._id) {
      partner = currentDialogObj.partner;
    } else if (currentDialogObj) {
      partner = currentDialogObj.author;
    }
  }

  return {
    partner,
  };
}
