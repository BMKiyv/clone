const req = require.context('@/assets/svg/', true, /\.svg$/);

const importAll = (requireContext) => {
    requireContext.keys().forEach(requireContext);
};

export default importAll(req);
