import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    const { me } = useSelector((state) => state.user);
    return (
        <>
            <Head>
                <title>My Profile | Nodebird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉" data={followingList} />
                <FollowList header="팔로워" data={followerList} />
            </AppLayout>
        </>
    )
};

export default Profile;