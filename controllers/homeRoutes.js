const User = require('../../models');
const withAuth = require('../../utils/auth');
const router = require ('express').Router();
router.get('/', withAuth, async (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/login', async (req, res) => {
    if (
        req.session.logged_in
    ) {
        res.redirect('/');
        return;
    }
    res.render('login');
});
router.get('/signup', async (req, res) => {
    if (
        req.session.logged_in
    ) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});
router.get('/dashboard', withAuth, async (req, res) => {
   if (!req.session.logged_in) {
        res.render('/login')
        return;
   }
    res.render('dashboard');
});

module.exports = router;