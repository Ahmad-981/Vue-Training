<template>
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f7fafc;">
      <div style="background-color: #fc8181; box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1); border-radius: 0.5rem; max-width: 24rem; overflow: hidden;">
        <img
          style="width: 100%; height: 15rem; object-fit: cover;"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_OOPOl_rZsVtwFmnMTGf2_bTIv4t_eSJzlA&s"
          alt="Food Image"
        />
        <div style="padding: 2.5rem;">
          <h2 style="font-size: 1.25rem; font-weight: bold; color: white; margin-bottom: 1.75rem; text-align: center;">Delicious Pizza</h2>
          
          <!-- Quantity -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <span style="color: white; font-weight: 600;">Quantity:</span>
            <span style="color: white;">2</span>
          </div>
  
          <!-- Price -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <span style="color: white; font-weight: 600;">Price:</span>
            <span style="color: white; font-weight: 600;">$15.99</span>
          </div>
  
          <!-- Description -->
          <p style="color: white; font-size: 1rem; margin-bottom: 1rem;">
            This delicious pizza is topped with fresh mozzarella, basil, and tomatoes.
          </p>
  
          <!-- Add to Cart Button -->
          <div style="text-align: center; margin-top: 2.5rem;">
            <button style="background-color: white; color: #fc8181; font-weight: 600; padding: 0.5rem 1rem; border-radius: 0.25rem; cursor: pointer;">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyComponent',
  };
  </script>
  
  <style scoped>
  /* No additional styles are required since we are using inline styles */
  </style>
