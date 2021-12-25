import React, { useEffect } from 'react';
import '../App.css';

import Axios from 'axios';
import styled from 'styled-components';

const Placeholder = styled.img`
  width: 80%;
  height: 300px;
  margin: 150px;
  opacity: 50%;
`;
const Instruct = styled.div`
  margin: 5px 0 0 0;
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-size: 21px;
  line-height: 19px;
  align-items: center;
  
  
`;
export default function HomePage(props) {


    useEffect(() => {

        const checkLoggedIn = async () => {
            if (localStorage.getItem('jwt')) {

                Axios({
                    method: 'get',
                    url: 'http://localhost:4000/api/users/isAuthenticated',
                    headers: {
                        'Authorization': localStorage.getItem('jwt'),
                    }
                }).catch(err => {
                    window.location = '/';
                    localStorage.removeItem('jwt');
                });
            }

        }
        checkLoggedIn();
    }, []);




    return (
            <>
            <Instruct>Please Sign in or Register to go Further</Instruct>
            <Placeholder src="/assets/movie-icon.svg" />
            </>


    );
}
