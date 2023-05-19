import { loadCountry } from "@/api";
import { Meta } from "@/components/meta/Meta";
import Detail from "@/layouts/detail";
import Main from "@/templates/main";
import type { Country } from "@/types";

type BlogProps = {
  data: Country;
};

const Blog = ({ data }: BlogProps) => {
  return (
    <Main meta={<Meta title={data.name.common} description="Lorem ipsum" />}>
      <Detail data={data} />
    </Main>
  );
};

export async function getServerSideProps({ query }: any) {
  const { slug } = query;
  try {
    const countriesData = await loadCountry({ name: slug });

    return {
      props: {
        data: countriesData.data,
      }, // will be passed to the page component as props
    };
  } catch (e) {
    // return to home page if country not found
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

export default Blog;
