import { gql } from '@apollo/client';

const GET_PRODUCTS = gql` 
query GET_PRODUCTS($after: String, $before: String, $first: Int, $last: Int, $where: RootQueryToProductConnectionWhereArgs) {
  products(after: $after, before: $before, first: $first, last: $last, where: $where) {
    edges {
      cursor
      node {
        id
        databaseId
        averageRating
        date
        name
        type
        slug
        image {
          altText
          sourceUrl
          title
        }
        paPublishers {
          nodes {
            name
            slug
            uri
          }
        }
        paTranslators {
          nodes {
            name
            slug
            uri
          }
        }
        paWriters {
          nodes {
            name
            slug
            uri
          }
        }
        ... on SimpleProduct {
          price(format: RAW)
          regularPrice(format: RAW)
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
`;

export default GET_PRODUCTS;
