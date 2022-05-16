import { gql } from "@apollo/client";

const LOGIN = gql`
query MyQuery($_eq: String, $_eq1: String) {
    login(where: {username: {_eq: $_eq}, password: {_eq: $_eq1}}) {
      id
    }
  }
  
`
export {LOGIN}