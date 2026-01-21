export const formatCategoryName = (categoryKey: string) => {
    const name = categoryKey.replace("machine_", "").split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return name.join(" ")+'s';
};