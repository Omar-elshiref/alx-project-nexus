import Container from "@/components/Container";
import Title from "@/components/Title";
const SingleBlogPage = async ({params,} : {params: Promise<{slug: string}>;}) => {
 const { slug } = await params;
  return (
    <div>
      <Container>
        <Title>Single Blog page</Title>
        <p className="text-center text-lightColor mt-5">
          {slug}
        </p>
      </Container>
    </div>
  );
}

export default SingleBlogPage;