import { gql } from "@apollo/client";

const INPUT_PACKAGE = gql`
mutation MyMutation($category_id: Int = 10, $image: String = "", $name_package: String = "", $place_package: String = "", $price_package: bigint = "") {
    package: insert_Packages_one(object: {category_id: $category_id, image: $image, name_package: $name_package, place_package: $place_package, price_package: $price_package}) {
      id
    }
  }
` 
const INPUT_BENEFITS_TYPE = gql`
mutation MyMutation($objects: [Benefit_type_insert_input!]!) {
    benefitType: insert_Benefit_type(objects: $objects) {
       returning {
         id
       }
     }
   }   
`

const UPDATE_PACKAGES = gql`
mutation MyMutation($_eq: Int = 10, $category_id: Int = 10, $image: String = "", $name_package: String = "", $place_package: String = "", $price_package: bigint = "") {
  updatePackage:  update_Packages(where: {Benefit_types: {packages_id: {_eq: $_eq}}}, _set: {category_id: $category_id, image: $image, name_package: $name_package, place_package: $place_package, price_package: $price_package}) {
    returning {
      id
    }
  }
}
`

const UPDATE_BENEFITS = gql`
mutation MyMutation($packages_id: Int = 10, $description: String = "", $benefit_id: Int = 10) {
  update_Benefit_type(where: {packages_id: {_eq: $packages_id}, benefit_id: {_eq: $benefit_id}}, _set: {description: $description}) {
    returning {
      id
    }
  }
}

`

const DELETE_PACKAGE = gql`
mutation MyMutation($_eq: Int!) {
  delete_Benefit_type(where: {packages_id: {_eq: $_eq}}) {
    affected_rows
  }
  delete_Packages(where: {id: {_eq: $_eq}}) {
    affected_rows
    returning {
      id
    }
  }
}
`

export { INPUT_PACKAGE, INPUT_BENEFITS_TYPE, UPDATE_PACKAGES, UPDATE_BENEFITS, DELETE_PACKAGE };