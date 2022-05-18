import { GraphQLClient, gql } from 'graphql-request';

interface Intro<T> {
  title: T;
  subtitle: T;
  id: T;
}
interface Navigation<T> {
  navigation: Array<{ link: T }>;
}
interface Data {
  intro: Intro<string>;
  nav: Navigation<string>;
}

export function request({
  query,
  variables,
  preview,
}: {
  query: string;
  variables: {};
  preview?: boolean;
}): Promise<Data> {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_NEXT_DATOCMS_API_TOKEN}`,
    },
  });
  return client.request(query, variables);
}

export const query = gql`
  query MyQuery($locale: SiteLocale) {
    _site {
      ...SiteFragment
    }
    navigation(locale: $locale) {
      ...NavigationRecordFragment
    }
    heroSection(locale: $locale) {
      ...HeroSectionRecordFragment
    }
    howwework(locale: $locale) {
      ...HowweworkRecordFragment
    }
  }
  fragment SiteFragment on Site {
    globalSeo(locale: $locale) {
      fallbackSeo {
        description
        title
      }
    }
  }
  fragment NavigationRecordFragment on NavigationRecord {
    headerlinks {
      id
      name
      navanchor
    }
  }
  fragment HeroSectionRecordFragment on HeroSectionRecord {
    label
    title
    description
    playButton
    mainVideoUrl
    hireButton
    chat {
      id
      message
    }
  }
  fragment HowweworkRecordFragment on HowweworkRecord {
    title
    steps {
      id
      title
      description
    }
    nextButton
    prevButton
  }
`;
