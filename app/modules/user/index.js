const account = (router) => {

  router.route('/add')
  .post(({ body: { username, password } }, res) => {
    let result = { status: 0, msg: 'Login failure' };

    if (username === 'duyetvv' && password === '111111') {
      result = { status: 1, msg: 'Login success' };
    }

    res.json(result);
  });

  router.route('/update')
  .put(({ bearer }, res) => {
    let result = { status: 0, msg: 'Logout failure' };

    if (bearer) {
      result = { status: 1, msg: 'Logout success' };
    }

    res.json(result);
  });
}


export default account;
