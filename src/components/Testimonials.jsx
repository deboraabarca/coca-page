import '../styles/Testimonials.css';
import avatar1 from '../assets/avatars/avatar1.jpg';
import avatar2 from '../assets/avatars/avatar2.jpg';
import avatar3 from '../assets/avatars/avatar3.jpg';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Jennifer Albert',
      avatar: avatar1,
      text: 'Using this tool to help a startup like mine made things more smooth and less time-consuming, and the interactive features are all user-friendly.',
      rating: 5
    },
    {
      id: 2,
      name: 'Jonathan Albert',
      avatar: avatar2,
      text: 'Amazing UI, sleek and elegant. The design is clean and welcoming with their support team. I feel they really cares about our business.',
      rating: 5
    },
    {
      id: 3,
      name: 'Jonathan Albert',
      avatar: avatar3,
      text: 'Integration was super easy with Mixpanel. The combination of super-sleek technology keeps visitors very engaged.',
      rating: 5
    }
  ];
  
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="text-center">Give our users a great experience</h2>
        <p className="text-center subtitle">Customers finding a high level of service always spread the positive experience with other potential customers</p>
        
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="testimonial-avatar">
                <img src={testimonial.avatar} alt={testimonial.name} />
              </div>
              <h4>{testimonial.name}</h4>
              <p>{testimonial.text}</p>
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
                <span className="rating-value">{testimonial.rating.toFixed(1)}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="pagination">
          <span className="pagination-dot active"></span>
          <span className="pagination-dot"></span>
          <span className="pagination-dot"></span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;