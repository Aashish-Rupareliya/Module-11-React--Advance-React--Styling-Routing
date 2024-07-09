import React from 'react';
import styled from 'styled-components';

const FeaturedCategories = () => {
  const categories = [
    { name: 'Red Apple', items: 26 },
    { name: 'Snack', items: 30 },
    { name: 'Vegetables', items: 26 },
    { name: 'Strawberry', items: 26 },
    { name: 'Black plum', items: 26 },
    { name: 'Custard apple', items: 26 },
    { name: 'Coffee & Tea', items: 26 },
    { name: 'Headphone', items: 26 },
    { name: 'Cake & Milk', items: 26 },
    { name: 'Organic Kiwi', items: 26 },
  ];

  return (
    <CategorySection>
      <SectionTitle>Featured Categories</SectionTitle>
      <CategoryList>
        {categories.map((category, index) => (
          <CategoryItem key={index}>
            <CategoryImage 
              src={`${process.env.PUBLIC_URL}/images/categories/${category.name.toLowerCase().replace(/ /g, '-')}.jpg`} 
              alt={category.name} 
              onError={(e) => { e.target.src = '/images/placeholder.jpg'; }}
            />
            <CategoryName>{category.name}</CategoryName>
            <CategoryItems>{category.items} items</CategoryItems>
          </CategoryItem>
        ))}
      </CategoryList>
    </CategorySection>
  );
};

const CategorySection = styled.section`
  padding: 2rem 4rem;
  background: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const CategoryList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CategoryItem = styled.div`
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  width: calc(20% - 1rem);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: calc(50% - 1rem);
  }

  @media (max-width: 480px) {
    width: calc(100% - 1rem);
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const CategoryName = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin: 0.5rem 0;
`;

const CategoryItems = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

export default FeaturedCategories;
