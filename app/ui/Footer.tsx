export const Footer: React.FC = () => {
  return (
    <footer className="mx-auto px-4 py-8">
      <div className="mt-8 pt-8 border-t border-gray-200 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} DokkuAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
