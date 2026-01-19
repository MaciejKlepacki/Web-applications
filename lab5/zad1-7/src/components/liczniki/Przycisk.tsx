interface PrzyciskProps {
  dodaj: () => void;
}

const Przycisk = ({ dodaj }: PrzyciskProps) => {
  return <button onClick={dodaj}>Dodaj</button>;
};

export default Przycisk;
