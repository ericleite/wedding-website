export interface SiteMetadata {
  description: string;
  title: string;
  author: string;
  siteUrl: string;
}

export interface SiteData {
  site: {
    buildTime: string;
    siteMetadata: SiteMetadata;
  };
}
