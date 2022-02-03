import { Layout, Card, Page, TextStyle} from '@shopify/polaris';

const Index = () => (
  <Page>
    <Layout>
      <Layout.AnnotatedSection
          title="Example title"
          description="This is an example description"
          >
            <Card>
                <TextStyle variation="strong">Example</TextStyle>
            </Card>

        </Layout.AnnotatedSection>
    </Layout>
  </Page>
  
);

export default Index;
