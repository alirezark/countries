import type { CountryResponse } from "@/api";
import { loadCountries } from "@/api/country";
import { Meta } from "@/components/meta/Meta";
import Home from "@/layouts/home";
import Main from "@/templates/main";

type PageProps = {
  data: CountryResponse;
};

const Index = ({ data }: PageProps) => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Home data={data} />
    </Main>
  );
};

export async function getServerSideProps() {
  const countriesData = await loadCountries();

  return {
    props: {
      data: countriesData,
    }, // will be passed to the page component as props
  };
}

export default Index;
