import { SectionContainer, SectionTitle } from './Section.styled';

function Section({title, children}) {
  return (
    <SectionContainer>
     <SectionTitle>{title}</SectionTitle>
     {children}
    </SectionContainer>
  );
}

export default Section;
