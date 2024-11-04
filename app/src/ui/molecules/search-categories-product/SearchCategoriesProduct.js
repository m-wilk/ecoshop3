import Select from "react-select";


const SearchCategoriesProduct = ({ className, options }) => {
  return (
    <form className={`flex  border border-primary rounded ps-3 ${className}`}>
      <input placeholder="Search Product...." className="flex-auto w-28" />
      <div className="w-0.5 my-2 bg-gray-400"></div>
      <Select
        className="flex-auto w-64"
        name="selectedCategory"
        options={options}
        placeholder="All Categories"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            border: "none",
            boxShadow: "none",
          }),
          placeholder: (baseStyles, state) => {
            return {
              ...baseStyles,
              color: "#707070",
            };
          },

          option: (baseStyles, state) => {
            return {
              ...baseStyles,
              background: "white",
              color: "black",
              "&:hover": {
                background: "#b7b7b7",
                color: "#fff",
              },
              "&:focus": {
                background: "#fff",
              },
            };
          },
          menuList: (baseStyles) => ({
            ...baseStyles,
            padding: "0",
            boxShadow: "none",
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            boxShadow: " 1px 0px 12px -5px rgba(184, 184, 191, 1)",
          }),
        }}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: () => (
            <span className="icon-circle-down text-lg me-4"></span>
          ),
        }}
      />
      <button className="bg-primary px-4 text-white rounded-r" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchCategoriesProduct;
