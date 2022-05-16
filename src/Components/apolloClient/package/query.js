import { gql } from "@apollo/client";

const GET_DATA_PACKAGE = gql`
query MyQuery {
    Packages {
      name_package
      place_package
      price_package
      image
      id
      Category {
        category
      }
      Benefit_types {
        RelationBenefit {
          name
        }
      }
    }
  }
  
`

const GET_DATA_DETAILS_PACKAGE = gql`
query MyQuery($_eq: Int!) {
  Packages(where: {id: {_eq: $_eq}}) {
    id
    image
    name_package
    place_package
    price_package
    category_id
    Category {
      category
    }
  }
  Benefit_type(where: {packages_id: {_eq: $_eq}}) {
    id
    description
    RelationBenefit {
      id
      name
    }
  }
}
`

export { GET_DATA_PACKAGE, GET_DATA_DETAILS_PACKAGE };