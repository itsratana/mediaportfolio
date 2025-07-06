type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title wow fadeInUp delay-0-2s">
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      </div>
  );
}
