export const isAndroidWebView = () => {
  const userAgent = navigator.userAgent;
  return /Android/i.test(userAgent) && /wv/i.test(userAgent);
}