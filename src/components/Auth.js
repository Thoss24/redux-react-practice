import classes from './Auth.module.css';
import { authActions } from '../store/auth_slice';
import { useSelector, useDispatch } from "react-redux";
import UserProfile from './UserProfile';
import { Fragment } from 'react';

const Auth = () => {

  const authenticated = useSelector(state => state.auth.authenticated);

  const dispatch = useDispatch()

  const loginHandler = (event) => {
    event.preventDefault()
    dispatch(authActions.login())
  };

  return (
    <Fragment>
    {authenticated ? <UserProfile /> : <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>}
    </Fragment>
  );
};

export default Auth;
