import type { CountryResponse } from "@/api";
import { loadCountries } from "@/api/country";
import { Meta } from "@/components/meta/Meta";
import Home from "@/layouts/home";
import Main from "@/templates/main";

type PageProps = {
  data: CountryResponse;
  name: string;
  region: string;
};

const Index = ({ data, name, region }: PageProps) => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Home data={data} searchedText={name} searchedRegion={region} />
    </Main>
  );
};

export async function getServerSideProps({ query }: any) {
  const { name, region } = query;
  const countriesData = await loadCountries({ name, region });

  return {
    props: {
      data: countriesData,
      name: name || "",
      region: region || "",
    }, // will be passed to the page component as props
  };
}

export default Index;
