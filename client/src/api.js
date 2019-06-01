const {REACT_APP_API_URL} = process.env;

if (!REACT_APP_API_URL) {
  console.error('Please, specify server host using REACT_APP_API_URL variable');
}

export default {
  getModules: async () =>
    REACT_APP_API_URL
      ? fetch(`${REACT_APP_API_URL}/modules/`).then(res => res.json()).catch(console.error)
      : []
}
