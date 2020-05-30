package com.roopre.navitabbar_2;

import android.graphics.Color;
import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.viewpager.widget.ViewPager;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import java.util.ArrayList;
import java.util.List;

import devlight.io.library.ntb.NavigationTabBar;

public class MainFragment extends Fragment {

    View rootView;
    ViewPager viewPager;
    MainAdapter mainAdapter;
    List<Fragment> fragments = new ArrayList<>();

    public MainFragment() {
        // Required empty public constructor
    }

    public static MainFragment newInstance(String param1, String param2) {
        MainFragment fragment = new MainFragment();
        Bundle args = new Bundle();
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
//        return inflater.inflate(R.layout.fragment_main, container, false);

        rootView = inflater.inflate(R.layout.fragment_main, container, false);

        viewPager = rootView.findViewById(R.id.viewPager);

        HomeFragment homeFragment = new HomeFragment();
        GalleryFragment galleryFragment = new GalleryFragment();
        SlideShowFragment slideShowFragment= new SlideShowFragment();

        fragments.clear();
        fragments.add(homeFragment);
        fragments.add(galleryFragment);
        fragments.add(slideShowFragment);

        mainAdapter = new MainAdapter(getChildFragmentManager(), fragments);
        mainAdapter.notifyDataSetChanged();

        viewPager.setAdapter(mainAdapter);





        final NavigationTabBar navigationTabBar = (NavigationTabBar) rootView.findViewById(R.id.ntb);
        final ArrayList <NavigationTabBar.Model> models = new ArrayList<>();

        models.add(
                new NavigationTabBar.Model.Builder(
                        getResources().getDrawable(R.drawable.ic_menu_camera),
                        Color.parseColor("#FF00FF")
                ).title("HOME")
                .badgeTitle("NTB")
                .build()
        );

        models.add(
                new NavigationTabBar.Model.Builder(
                        getResources().getDrawable(R.drawable.ic_menu_gallery),
                                Color.parseColor("#FFFF00")
                        ).title("GALLERY")
                .badgeTitle("With")
                .build()
        );



        models.add(
                new NavigationTabBar.Model.Builder(
                        getResources().getDrawable(R.drawable.ic_menu_slideshow),
                        Color.parseColor("#00FFFF")
                ).title("SHOW")
                .badgeTitle("state")
                .build()
        );

        navigationTabBar.setModels(models);
        navigationTabBar.setViewPager(viewPager);
//
//        navigationTabBar.setTitleMode(NavigationTabBar.TitleMode.ACTIVE);
//        navigationTabBar.setBadgeGravity(NavigationTabBar.BadgeGravity.BOTTOM);
//        navigationTabBar.setBadgePosition(NavigationTabBar.BadgePosition.CENTER);
//        navigationTabBar.setTypeface("fonts/custom_font.ttf");
//        navigationTabBar.setIsBadged(true);
//        navigationTabBar.setIsTitled(true);
//        navigationTabBar.setIsTinted(true);
//        navigationTabBar.setIsBadgeUseTypeface(true);
//        navigationTabBar.setBadgeBgColor(Color.RED);
//        navigationTabBar.setBadgeTitleColor(Color.WHITE);
//        navigationTabBar.setIsSwiped(true);
//        navigationTabBar.setBgColor(Color.BLACK);
//        navigationTabBar.setBadgeSize(10);
//        navigationTabBar.setTitleSize(10);
//        navigationTabBar.setIconSizeFraction(0.5f);
        return rootView;
    }
}
