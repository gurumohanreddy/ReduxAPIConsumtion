import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './loadingDots';

const Header = ({loading}) => {
  return (
    <nav>
    <IndexLink to="/">Home</IndexLink>
    {"|"}
    <Link to="about">About</Link>
    {"|"}
    <Link to="courses">Courses</Link>
    {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
