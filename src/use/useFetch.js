import { ref } from 'vue';

const useFetch = () => {
  const ratings = ref([]);

  const getCurrency = async (query) => {
    const response = await Promise.all([
      fetch(`${query}EUR`),
      fetch(`${query}USD`),
      fetch(`${query}GBP`),
    ]);
    const data = await Promise.all(response.map((currency) => currency.json()));

    ratings.value = data;
  };

  return { ratings, getCurrency };
};

export default useFetch;
