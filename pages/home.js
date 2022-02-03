import { Layout, Card, Page, TextStyle} from '@shopify/polaris';

const Home = () => (
  <Page>
    <Layout>
      <Layout.AnnotatedSection
          title="Home title"
          description="This is an example description"
          >
            <Card>
                <TextStyle variation="strong">Home Page</TextStyle>
            </Card>

        </Layout.AnnotatedSection>
    </Layout>
  </Page>
  
);

export default Home;
