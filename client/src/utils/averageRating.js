const calculateAvgRating = (reviews) => {
  const totalRating = reviews.reduce((acc, item) => acc + item.rating, 0);
  const avgRating =
    totalRating === 0
      ? 0
      : parseFloat((totalRating / reviews.length).toFixed(2));

  return { totalRating, avgRating };
};

export default calculateAvgRating;
