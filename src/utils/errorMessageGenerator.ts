
export const errorMessageGenerator = (err: any) => {
return `${err?.status && `${err?.status}:`} ${err?.data?.message || 'Something went wrong'}`
};