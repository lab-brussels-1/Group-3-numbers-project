export const teammates = () => {
  const solution = document.getElementById('team').value;
  console.log(solution);
  return solution;
};
document.getElementById('all').addEventListener('click', teammates);
