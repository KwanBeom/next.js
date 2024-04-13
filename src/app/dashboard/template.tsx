const DashboardTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border border-green-500 border-dashed">
      {children} its dashboard template
    </div>
  );
};

export default DashboardTemplate;
