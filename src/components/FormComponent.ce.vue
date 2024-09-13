<script setup>
import { ref } from 'vue';

const username = ref('');
const email = ref('');
const password = ref('');
const address = ref('');

// Handle changes from web components
const handleInputChange = (field, event) => {
    const newValue = event.detail; // Assuming custom events are sent with `detail` containing the new value
    if (field === 'username') username.value = newValue;
    if (field === 'email') email.value = newValue;
    if (field === 'password') password.value = newValue;
    if (field === 'address') address.value = newValue;
};

const handleSubmit = () => {
    const formData = {
        username: username.value,
        email: email.value,
        password: password.value,
        address: address.value,
    };
    console.log('Form submitted with:', formData);
};
</script>


<template>
    <div>
        <h1
            style="display: flex; justify-content: center; padding: 20px; font-weight: 600; color: white; background-color: #f87171;">
            Signup Form (Web component)
        </h1>
    </div>

    <div style="display: flex; justify-content: center;">
        <form @submit.prevent="handleSubmit" style="justify-content: center; margin-top: 20px;">
            
            <div style="margin-bottom: 12px;">
                <text-field
                    placeholder="Enter username"
                    type="text"
                    :value="username"
                    @change="handleInputChange('username', $event)"
                    required
                />
            </div>

            <div style="margin-bottom: 12px;">
                <text-field
                    placeholder="Enter email"
                    type="email"
                    :value="email"
                    @change="handleInputChange('email', $event)"
                    required
                />
            </div>

            <div style="margin-bottom: 12px;">
                <text-field
                    placeholder="Enter password"
                    type="password"
                    :value="password"
                    @change="handleInputChange('password', $event)"
                    required
                />
            </div>

            <div style="margin-bottom: 12px;">
                <text-field
                    placeholder="Enter address"
                    type="text"
                    :value="address"
                    @change="handleInputChange('address', $event)"
                    required
                />
            </div>

            <div style="display: flex; justify-content: center; padding: 8px; border-radius: 12px;">
                <my-button>Submit</my-button>
            </div>

        </form>
    </div>
</template>

