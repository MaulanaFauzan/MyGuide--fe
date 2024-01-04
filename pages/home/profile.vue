<template>
  <div>
    <div class="container rounded bg-white mt-6 mb-6">
      <div class="row">
        <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img class="rounded-circle mt-5 w-150px"
              :src="user.pathFoto || 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'" />
            <span class="font-weight-bold">{{ user.name || 'Nama User' }}</span>
            <span>
              <button type="button" class="btn btn-link text-white" style="padding-top: 10%" @click="changePhoto">
                Ubah Foto
              </button>
            </span>
          </div>
        </div>
        <div class="col-md-8 border-right">
          <div class="p-3 py-5">
            <form @submit.prevent="onSubmit">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Profile Settings</h4>
              </div>
              <div class="row mt-2">
                <div class="col-md-12">
                  <label class="labels">Nama</label>
                  <input type="text" class="form-control" placeholder="Nama" v-model="user.name" />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Alamat</label>
                  <input type="text" class="form-control" placeholder="Masukkan Alamat" v-model="user.address" />
                </div>
                <div class="col-md-12">
                  <label class="labels">Email</label>
                  <input type="text" class="form-control" placeholder="enter email" v-model="user.email" />
                </div>
              </div>
              <div class="mt-5 text-center">
                <!-- <button class="btn btn-primary profile-button text-white" type="button" data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
                  Save Profile
                </button> -->
                <button type="submit" class="btn btn-primary">Save changes</button>
              </div>
              <!-- <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true" style="z-index: 1055">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">Simpan Perubahan ?</div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                        style="margin-bottom: 14px">Close</button>
                      
                    </div>
                  </div>
                </div>
              </div> -->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2';
import axios from 'axios';

const user = ref({
  id: '',
  name: '',
  address: '',
  email: '',
  pathFoto: '',
});

const loading = ref(false);

onMounted(() => {
  fetchUserData();
});

const fetchUserData = async () => {
  try {
    loading.value = true;
    Swal.fire({
      title: 'Loading',
      html: 'Fetching user data...',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });

    const token = useCookie('token');
    const response = await axios.get('http://localhost:9090/user/me', {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    user.value = response.data.data;

    loading.value = false;

    if (!loading.value) {
      Swal.close();
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Success fetching data.',
      });
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    loading.value = false;
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Failed to fetch user data. Please try again later.',
    });
  }
};

const changePhoto = async () => {
  try {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    fileInput.addEventListener('change', async (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const shouldUpdate = await Swal.fire({
          title: 'Confirmation',
          text: 'Are you sure you want to change your photo?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
        });

        if (shouldUpdate.isConfirmed) {
          const reader = new FileReader();
          reader.onload = () => {
            user.value.pathFoto = reader.result as string; // Update the user's pathFoto with base64 data
          };
          reader.readAsDataURL(file);
          Swal.fire('success', 'Success Update Foto Profile!', 'success')
        }
      }
    });

    fileInput.click();
  } catch (error) {
    console.error('Error changing user photo:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Failed to change user photo. Please try again later.',
    });
  }
};



const onSubmit = async () => {
  try {
    const update = await Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to change your photo?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    });
    if (update.isConfirmed) {
      loading.value = true;
      Swal.fire({
        title: 'Updating Profile',
        html: 'Please wait...',
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
      });
      const userPost = ref({
        id: user.value.id,
        name: user.value.name,
        address: user.value.address,
        email: user.value.email,
        pathFoto: user.value.pathFoto,
      });
      const token = useCookie('token');
      await axios.post(`http://localhost:9090/user/update`, userPost.value, {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });

      loading.value = false;
      if (!loading.value) {
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Profile updated successfully.',
        });
      }
    }

  } catch (error) {
    console.error('Error updating user profile:', error);
    loading.value = false;
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Failed to update profile. Please try again later.',
    });
  }
};
</script>
