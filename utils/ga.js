export default url => {
  try {
    window.gtag('config', 'UA-32492125-4', {
      page_location: url
    })
  } catch (error) {}
}
