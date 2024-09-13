<script setup>
</script>

<template>
    <div class="flex justify-center items-center h-full bg-gray-100">
        <div class="bg-red-400 shadow-lg rounded-lg max-w-sm overflow-hidden">
            <img class="w-full h-60 object-fill"
                src="https://recipe52.com/wp-content/uploads/2018/07/Pakistani-Biryani-blog-1-of-1-edited-1-500x375.jpg"
                alt="Food Image" />

            <div class="p-10">
                <h2 class="text-xl font-bold text-white mb-7 text-center">Delicious Pizza</h2>

                <!-- Quantity -->
                <div class="flex justify-between items-center mb-4">
                    <span class="text-white font-semibold">Quantity:</span>
                    <span class="text-white">2</span>
                </div>

                <!-- Price -->
                <div class="flex justify-between items-center mb-4">
                    <span class="text-white font-semibold">Price:</span>
                    <span class="text-white font-semibold">$15.99</span>
                </div>

                <!-- Description -->
                <p class="text-white text-md mb-4">
                    This delicious pizza is topped with fresh mozzarella, basil, and tomatoes.
                </p>

                <!-- Add to Cart Button -->
                <div class="text-center mt-10">
                    <button class="bg-white text-red-400 font-semibold px-4 py-2 rounded hover:bg-blue-700">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>